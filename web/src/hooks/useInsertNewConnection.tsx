import { createClient } from "@supabase/supabase-js";
import { Connection } from "../components/CreateAdForm";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);
const useInsertNewConnection = (userForm: Connection) => {

  const fetchConnections = async () => {
    try {
      const { data, error } = await supabase.from("connections").insert([
        {
          playername: userForm.playername,
          hoursplayed: userForm.hoursplayed,
          daysofweek: userForm.daysofweek.filter((item) => item !== ""),
          starthour: userForm.starthour,
          endhour: userForm.endhour,
          isvoicecall: userForm.isvoicecall,
          gameid: userForm.gameid,
          discordnickname: userForm.discordnickname,
        },
      ]);
      if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      console.error("Error fetching connections:", error);
    }
  };

  fetchConnections();
};

export default useInsertNewConnection;
