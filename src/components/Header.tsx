import { Button } from "../stories/Button";
import Logo from "./atoms/Logo";
import ProfileImg from "./atoms/ProfileImg";

type User = {
  name: string;
  image: string;
};

export interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  // onLogout?: () => void;
  onCreateAccount?: () => void;
  onCreateGather?: () => void;
}

export const Header = ({
  user,
  onLogin,
  // onLogout,
  onCreateAccount,
  onCreateGather,
}: HeaderProps) => (
  <header className="h-15 bg-black">
    <div className="flex justify-between items-center h-full px-12 bg-black text-white">
      <div className="flex items-center gap-6">
        <Logo />
        <nav className="flex gap-6 text-sm items-center">
          <a href="#" className="hover:underline whitespace-nowrap">
            함께 장보기
          </a>
          <a  href="#" className="hover:underline  whitespace-nowrap">
            함께 소분하기
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <ProfileImg profile={user.image} />
              </div>
              <b className="hidden md:block">{user.name}</b>
            </span>
            <Button size="small" onClick={onCreateGather} label="모임 만들기" />
            {/* <Button size="small" onClick={onLogout} label="로그아웃" /> */}
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="로그인" />
            <Button
              primary
              size="small"
              onClick={onCreateAccount}
              label="회원가입"
            />
          </>
        )}
      </div>
    </div>
  </header>
);