import { UserStore } from '@/lib/types';
import { create  } from 'zustand';
import { persist,  devtools } from 'zustand/middleware'

const useUserStore = create<UserStore>()(
  persist(
    devtools((set, get) => ({
      user_id: '',
      email: '',
      access_token: '',

      setUser: (user_id, email, access_token) =>
        set({ user_id, email, access_token }),

      getUserInfo: () => ({
        user_id: get().user_id,
        email: get().email,
      }),

      getAccessToken: () => get().access_token,
    })),
    {
      name: 'user-store', 
      getStorage: () => localStorage, 
    }
  )
);

export default useUserStore;