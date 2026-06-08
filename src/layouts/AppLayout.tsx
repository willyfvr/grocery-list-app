type Props = {
  children: React.ReactNode;
};

export function AppLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto min-h-screen max-w-md bg-white shadow">
        {children}
      </div>
    </div>
  );
}