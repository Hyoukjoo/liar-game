import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/dist/client/router';

import UserModel from '@models/UserModel';
import { getMyInfo, logout as logoutRequest } from '@services/Auth/remotes';

const useAccount = (isRequiredLogin?: boolean) => {
  const router = useRouter();

  const [isInit, setIsInit] = useState(false);
  const [account, setAccount] = useState<UserModel>(null);

  const isLogin = useMemo(() => account !== null, [account]);

  const logout = useCallback(async () => {
    const result = await logoutRequest();

    if (result) {
      setAccount(null);
    }
  }, [account]);

  useEffect(() => {
    getMyInfo()
      .then((dto) => {
        const user = new UserModel(dto);
        setAccount(user);
      })
      .catch(() => {
        setAccount(null);
      })
      .finally(() => {
        setIsInit(true);
      });
  }, [router.pathname]);

  useEffect(() => {
    if (isInit && isRequiredLogin && !isLogin) {
      alert('로그인이 필요합니다. 로그인 페이지로 이동합니다.');

      router.push({
        pathname: '/account/login',
        query: {
          exPath: router.pathname,
        },
      });
    }
  }, [isInit, isLogin]);

  return {
    account,
    logout,
    isInit,
    isLogin,
  };
};

export default useAccount;
