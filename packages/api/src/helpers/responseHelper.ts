import { Context } from "hono";
import { StatusCode } from "hono/utils/http-status";

// Contoh kode untuk helper: responseHelper
export function responseHelper(c:Context,statusCode: StatusCode, data:any ) {
  return {
    success: statusCode > 299 ? false : true,
    data, 
  }
}