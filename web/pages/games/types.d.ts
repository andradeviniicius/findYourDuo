export interface TwitchGame {
  id: string;
  name: string;
  box_art_url: string;
}
export interface TwitchError {
  error?: string;
  status?: number;
  message?: string;
  data?: TwitchGame[];
}
export interface TwitchGamesResponse {
  error?: string;
  data: TwitchGame[];
  pagination: {
    cursor: string;
  };
  message?: string;
}
