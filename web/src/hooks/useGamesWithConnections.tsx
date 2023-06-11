import { useEffect, useState } from "react";
import { supabase } from "../../supabase/supabase";

const useGamesWithConnections = () => {
  const [connections, setConnections] = useState<{ [x: string]: any }[]>([]);

  useEffect(() => {
    const fetchGamesAndConnections = async () => {
      try {
        let { data: connections, error } = await supabase
          .from("connections")
          .select("gameid");

        if (error) {
          throw new Error(error.message);
        }

        if (connections) {
          setConnections(connections);
        }
      } catch (error) {
        console.error("Error fetching connections:", error);
      }
    };
    fetchGamesAndConnections();
  }, []);

  return connections;
};

export default useGamesWithConnections;
