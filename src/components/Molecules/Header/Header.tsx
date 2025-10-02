import { Button } from '../../Atoms/Button';
import Logo from '../../Atoms/Logo';
import ProfileImg from '../../Atoms/ProfileImg';

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
  <header className="h-15">
    <div className="border-gray-10 flex h-full items-center justify-between border-b bg-white px-12 text-black">
      <div className="flex items-center gap-6">
        <Logo color="black" />
        <nav className="flex items-center gap-6 text-base font-normal">
          <a href="#" className="font-memomentKkukkkuk hover:text-primary whitespace-nowrap">
            함께 장보기
          </a>
          <a href="#" className="font-memomentKkukkkuk hover:text-primary whitespace-nowrap">
            함께 소분하기
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span className="flex items-center gap-2">
              <div className="h-10 w-10 overflow-hidden rounded-full">
                <ProfileImg profile={user.image} />
              </div>
              <b className="hidden md:block">{user.name}</b>
            </span>
            <Button primary size="small" onClick={onCreateGather} label="모임 만들기" />
            {/* <Button size="small" onClick={onLogout} label="로그아웃" /> */}
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="로그인" />
            <Button primary size="small" onClick={onCreateAccount} label="회원가입" />
          </>
        )}
      </div>
    </div>
  </header>
);
