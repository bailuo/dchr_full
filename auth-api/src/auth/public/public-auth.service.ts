import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { generateKeyPairSync } from 'crypto';
import { KeyRecord } from '../key-record.entity';

@Injectable()
export class PublicAuthService {
  constructor(
    @InjectRepository(KeyRecord)
    private keyRecordRepository: Repository<KeyRecord>
  ) {}

  async getPublicKey(): Promise<string> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let keyRecord = await this.keyRecordRepository.findOne({
      where: { date: today },
    });

    if (!keyRecord) {
      // Delete all previous records
      await this.keyRecordRepository.clear();

      const { publicKey, privateKey } = generateKeyPairSync('rsa', {
        modulusLength: 2048,
      });

      keyRecord = new KeyRecord();
      keyRecord.date = today;
      keyRecord.publicKey = publicKey.export({
        type: 'pkcs1',
        format: 'pem',
      }) as string;
      keyRecord.privateKey = privateKey.export({
        type: 'pkcs1',
        format: 'pem',
      }) as string;

      await this.keyRecordRepository.save(keyRecord);
    }

    return keyRecord.publicKey;
  }
}
