no comeco do codigo
chama endpoint

api/validateTwitchSession

que retorna

{
	status: ''
}

{

}




12-0391029312
123p9182039812093e
1293812093821



send POST to https://id.twitch.tv/oauth2/token

Parameter	Required?	Type	Description
client_id	Yes	String	Your app’s registered client ID.
client_secret	Yes	String	Your app’s registered client secret.
grant_type	Yes	String	Must be set to client_credentials.

ex:
client_id=hof5gwx0su6owfnys0yan9c87zr6t
&client_secret=41vpdji4e9gif29md0ouet6fktd2
&grant_type=client_credentials


If the request succeeds, it returns an access token.

{
  "access_token": "jostpf5q0uzmxmkba9iyug38kjtgh",
  "expires_in": 5011271,
  "token_type": "bearer"
}


`https://id.twitch.tv/oauth2/token&client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_SECRET}&grant_type=client_credentials`

https://id.twitch.tv/oauth2/validate