function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <div className="border-r-2 p-4 border-amber-50">Ashish</div>
      {children}
    </div>
  );
}

export default layout;
