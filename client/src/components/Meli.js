import React, {useState, useEffect} from "react";
import Button from "./common/Button";
import * as utils from '../utils/utils'

export default function Meli() {
  const [code, setCode] = useState('TG-6755bd9b85a62800018df18a-99922095');

  const API_URL = "https://api.mercadolibre.com/auth/token"
  const clientId = '2180357168247496';
  const clientSecret = 'G9F3m1GsVRFN5bvIjNXu1nmD4WB60O7t';
  const redirectUri = 'https://madstage-a16bef77c5b8.herokuapp.com/login';
  const authUrl = `https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;

  const getAuthorizationCode = async () => {
    const body = {
      grant_type: 'authorization_code',
      client_id: clientId,
      client_secret: clientSecret,
      code: code,
      redirect_uri: redirectUri
    }
    const meliTokens = await utils.postRequest(API_URL, body);
    return meliTokens;
  }

  useEffect(() => {
    if (code) {
      const tokens = getAuthorizationCode();
      console.log('Tokens', tokens)
    }
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get('code');
    setCode(codeParam);
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen text-white">
      <div className="flex h-[calc(100vh-4rem)]">
        <main className="flex-1">
          <div className="h-full overflow-auto mt-4">
            <div className="flex items-center justify-center h-full">
              <div className="flex flex-col items-center justify-center p-4 rounded w-[400px]">
                {
                  code ? 
                  (<></>)
                  :
                  (<a className="text-blue-600" href={authUrl}>Connect to Meli</a>)
                }
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}