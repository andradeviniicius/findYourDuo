import { useEffect, useState } from "react";
import { supabase } from "../../supabase/supabase";

interface Connection {
  connectionid: number;
  playername: string;
  hoursplayed: number;
  daysofweek: string[];
  starthour: string;
  endhour: string;
  isvoicecall: boolean;
  gameid: number;
}

const useConnectionsByGameId = (gameId: string) => {
  const [connections, setConnections] = useState<{ [x: string]: any }[]>([]);

  useEffect(() => {
    const fetchConnections = async () => {
      try {
        const { data, error } = await supabase
          .from("connections")
          .select()
          .eq("gameid", gameId);

        if (error) {
          throw new Error(error.message);
        }

        if (data) {
          setConnections(data);
        }
      } catch (error) {
        console.error("Error fetching connections:", error);
      }
    };

    fetchConnections();
  }, [gameId]);

  return connections;
};

export default useConnectionsByGameId;
