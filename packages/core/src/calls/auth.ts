import * as SUPABSE from "../types/supabase";
import { SupabaseClient } from "@supabase/auth-helpers-nextjs";

export const getServerSession = async (
  supbase: SupabaseClient<SUPABSE.Database>
) => {
  const {
    data: { session },
    error,
  } = await supbase.auth.getSession();

  return { session, error };
};
type ServerSessionResponse = Awaited<ReturnType<typeof getServerSession>>;
export type ServerSessionData = ServerSessionResponse["session"];
export type ServerSessionError = ServerSessionResponse["error"];
