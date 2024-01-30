import { supabase } from "../supabase/supabase";

export class Helper {
  static async getTopGames(accessToken: string) {
    const res = await fetch("https://api.twitch.tv/helix/games/top?first=23", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Client-Id": `${process.env.TWITCH_CLIENT_ID}`,
      },
    });
    const data = await res.json();
    return data;
  }

  static async getAccessToken() {
    return await fetch(
      `https://id.twitch.tv/oauth2/token?grant_type=client_credentials&client_secret=${process.env.TWITCH_SECRET}&client_id=${process.env.TWITCH_CLIENT_ID}`,
      { method: "POST" }
    )
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.error(`There was an error: ${err}`);
      });
  }

  static async validateAccessToken(accessToken: string) {
    return await fetch(`https://id.twitch.tv/oauth2/validate`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.error(`There was an error: ${err}`);
      });
  }

  static async grabAccessToken() {
    let { data: accessToken, error } = await supabase
      .from("accessToken")
      .select("*");

    return accessToken[0];
  }
}
