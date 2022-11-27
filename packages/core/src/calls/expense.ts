import * as SUPABSE from "../types/supabase";
import { SupabaseClient } from "@supabase/auth-helpers-nextjs";

export const getUsersExpensesValues = async (
  supabase: SupabaseClient<SUPABSE.Database>
) => {
  const { data, error } = await supabase.from("expenses").select("value");

  return {
    usersExpensesValues: data ?? [],
    error,
  };
};
type UsersExpensesValuesResponse = Awaited<
  ReturnType<typeof getUsersExpensesValues>
>;
export type UsersExpensesValuesData =
  UsersExpensesValuesResponse["usersExpensesValues"];
export type UsersExpensesValuesError = UsersExpensesValuesResponse["error"];
