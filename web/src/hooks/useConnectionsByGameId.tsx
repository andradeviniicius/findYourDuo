import { useEffect, useState } from "react";
import {
  PostgrestResponse,
  PostgrestSingleResponse,
  createClient,
} from "@supabase/supabase-js";

const supabaseUrl = "https://qoqcgdkpljrvdqlmasrs.supabase.co"; // Replace with your Supabase URL
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvcWNnZGtwbGpydmRxbG1hc3JzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU5MjY1MTMsImV4cCI6MjAwMTUwMjUxM30.TSerFoUzIeistt0zuikV2mpsGWHhA7XgnXvfrlINrk0"; // Replace with your Supabase API key

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

export const supabase = createClient(supabaseUrl, supabaseKey);
const useConnectionsByGameId = (gameId: string) => {
  const [connections, setConnections] = useState<{ [x: string]: any }[]>([]);

  useEffect(() => {

    const fetchConnections = async () => {
      try {
        const { data, error } = await supabase
          .from("connections")
          .select()
          .eq("gameId", gameId);

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
