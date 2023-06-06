const BlogList = (props) => {
  const blogs = props.blogs;
  console.log(props, blogs);
  return <div className="">{<h4> {blogs}</h4>}</div>;
};
