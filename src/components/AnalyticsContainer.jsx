function AnalyticsContainer({ children }) {
  console.log("container rendered");
  return <main className="container">{children}</main>;
}

export default AnalyticsContainer;
