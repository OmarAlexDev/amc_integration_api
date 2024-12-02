import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/utils/guards/auth.guard';
import { AdsAuthService } from './ads-auth.service';

@Controller('ads-auth')
@UseGuards(AuthGuard)
export class AdsAuthController {
  constructor(private adsAuthService: AdsAuthService) {}

  @Get()
  async getRefreshToken() {
    return await this.adsAuthService.refreshAccessToken();
  }
}
