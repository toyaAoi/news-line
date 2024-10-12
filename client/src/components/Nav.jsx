const Nav = () => {
  return (
    <div>
      <nav className="flex justify-between items-center py-10 px-16 fixed w-full left-0 top-0 z-10 bg-black">
        <p className="text-3xl font-semibold">News_Line__</p>
        <div className="flex gap-8">
          <div className="underline cursor-pointer">Login</div>
          <div className="underline cursor-pointer">Sign Up</div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
