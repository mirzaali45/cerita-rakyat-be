import { Request, Response } from "express";
import { prisma } from "../config/database";
import { successResponse, errorResponse } from "../utils/response";

// Get public settings (no auth required)
export const getPublicSettings = async (req: Request, res: Response) => {
  try {
    const settings = await prisma.appSetting.findMany({
      where: {
        key: {
          in: ["app_name", "app_version", "maintenance_mode"],
        },
      },
    });

    // Convert array to object
    const settingsObj: Record<string, string> = {};
    settings.forEach((s) => {
      settingsObj[s.key] = s.value;
    });

    successResponse(res, {
      appName: settingsObj["app_name"] || "Cerita Rakyat Indonesia",
      appVersion: settingsObj["app_version"] || "1.0.0",
      maintenanceMode: settingsObj["maintenance_mode"] === "true",
    });
  } catch (error) {
    errorResponse(res, "Gagal mengambil settings");
  }
};