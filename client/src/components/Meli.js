import React, {useState, useEffect} from "react";
import axios from 'axios';
import qs from 'qs';

// TG-67744bd8e979cc0001daea77-99922095
// https://meli-facturin-652baafb21fd.herokuapp.com/meli?code=TG-67744cdac276670001f9c418-99922095

// {"access_token":"APP_USR-2180357168247496-123115-0c3da9ec48355081addb2ecf662e7c55-99922095","token_type":"Bearer","expires_in":21600,"scope":"offline_access read write","user_id":99922095,"refresh_token":"TG-67744d2bdf9c390001e382bb-99922095"}

export default function Meli() {
  const [error, setError] = useState('');
  const [data, setData] = useState({});
  const [dataRefresh, setDataRefresh] = useState({});

  const clientId = '2180357168247496';
  const clientSecret = 'G9F3m1GsVRFN5bvIjNXu1nmD4WB60O7t';
  const grant_type = 'authorization_code';
  const redirectUri = 'https://meli-facturin-652baafb21fd.herokuapp.com/meli';
  const authUrl = `https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;

  const getAuthorizationCode = async (code) => {
    let data = qs.stringify({ 'grant_type': grant_type, 'client_id': clientId, 'client_secret': clientSecret, 'code': code, 'redirect_uri': redirectUri});
    let config = {
      method: 'post', maxBodyLength: Infinity, url: 'https://api.mercadolibre.com/oauth/token', headers: { 'accept': 'application/json', 'content-type': 'application/x-www-form-urlencoded'},
      data : data
    };
    
    return axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setData(response.data)
        return response.data;
      })
      .catch((error) => {
        setError(error)
        console.log('error 1er catch', error);
        if (error.message.includes('400')) {
          console.log('hacer refresh')
          const newToken = refreshToken(data?.refresh_token);
          console.log('Tokens refresh', newToken)
          if (newToken?.access_token) {
            setData(newToken);
          }
        }
      });
  }

  const refreshToken = async (code) => {
    try { 
      let data = qs.stringify({ 'grant_type': 'refresh_token', 'client_id': clientId, 'client_secret': clientSecret, 'refresh_token': code });
      let config = { method: 'post', maxBodyLength: Infinity, url: 'https://api.mercadolibre.com/oauth/token', headers: {  'accept': 'application/json',  'content-type': 'application/x-www-form-urlencoded' }, data : data };
      
      return axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setDataRefresh(response.data)
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        setError(error)
      });
    } catch (error) {
      setError(error)
    }
  }

  const getSomething = async (q) => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://api.mercadolibre.com/products/search?site_id=MLA&product_identifier=${q}`,
      headers: { 
        'Authorization': 'Bearer APP_USR-2180357168247496-123116-9b7b6e1c960cae4603fe30e62c967eda-99922095'
        // 'Authorization': 'Bearer data?.access_token'
      }
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });    
  }

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get('code');
    let tokens = null;

    if (codeParam) {
      tokens = getAuthorizationCode(codeParam);
    }
  }, [])

  return (
    <div className="flex flex-col w-screen h-screen text-white">
      <div className="flex h-[calc(100vh-4rem)]">
        <main className="flex-1">
          <div className="h-full overflow-auto mt-4">
            <div className="flex items-center justify-center h-full">
              <div className="flex flex-col items-center justify-center p-4 rounded w-[400px]">
              {
                !data?.access_token?.length && (
                  <a className="text-blue-600" href={authUrl}>Connect to Meli</a>
                )
              }

              {
                data?.access_token?.length && (data.access_token)
              }

              {
                error !== '' && (
                  <div className="flex items-center justify-center text-red-500">
                    {error.code + ' ' + error.stack}
                  </div>
                )
              }
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
