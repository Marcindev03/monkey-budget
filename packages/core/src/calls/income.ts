import * as SUPABSE from "../types/supabase";
import { SupabaseClient } from "@supabase/auth-helpers-nextjs";

export const getUsersIncomesValues = async (
  supabase: SupabaseClient<SUPABSE.Database>
) => {
  const { data, error } = await supabase.from("incomes").select("value");

  return {
    usersIncomesValues: data ?? [],
    error,
  };
};
type UsersIncomesValuesResponse = Awaited<
  ReturnType<typeof getUsersIncomesValues>
>;
export type UsersIncomesValuesData =
  UsersIncomesValuesResponse["usersIncomesValues"];
export type UsersIncomesValuesError = UsersIncomesValuesResponse["error"];
