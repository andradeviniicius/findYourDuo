import { Connection } from "../components/CreateAdForm";
import { supabase } from "../../supabase/supabase";

const useInsertNewConnection = (userForm: Connection) => {
  const fetchConnections = async () => {
    try {
      const { data, error } = await supabase
        .from("connections")
        .insert([
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
        ])
        .select();

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
