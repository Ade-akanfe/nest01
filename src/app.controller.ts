import { Module, Controller, Get } from "@nestjs/common";

@Controller("/api")
export class AppController {
  @Get("/")
  getRootDir() {
    return "Ademola";
  }
}
