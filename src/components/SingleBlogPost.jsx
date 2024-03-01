import MainBlogPost from './MainBlogPost';
import SidebarLeft from './SidebarLeft';
import RightSidebar from './RightSidebar';

function SingleBlogPost() {
  return (
    <section className="reviewSection mt-10 block  px-6 py-12">
      <div className="mx-auto my-0 w-auto md:max-w-[1152px]">
        <div className="singleblogGrid">
          <SidebarLeft />

          <MainBlogPost />

          <RightSidebar />
        </div>
      </div>
    </section>
  );
}
export default SingleBlogPost;
