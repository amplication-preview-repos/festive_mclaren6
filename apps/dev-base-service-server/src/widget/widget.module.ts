import { Module } from "@nestjs/common";
import { WidgetModuleBase } from "./base/widget.module.base";
import { WidgetService } from "./widget.service";
import { WidgetController } from "./widget.controller";
import { WidgetResolver } from "./widget.resolver";

@Module({
  imports: [WidgetModuleBase],
  controllers: [WidgetController],
  providers: [WidgetService, WidgetResolver],
  exports: [WidgetService],
})
export class WidgetModule {}
