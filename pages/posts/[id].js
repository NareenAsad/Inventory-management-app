export async function getStaticPaths() {
    // Fetch or define paths to be pre-rendered
    const paths = [
      { params: { id: '1' } },
      { params: { id: '2' } },
    ];
  
    return { paths, fallback: false };
}
  
export async function getStaticProps({ params }) {
    // Fetch data based on params.id
    return {
      props: {
        // Data to be passed to the page component
      },
    };
}
  
export default function Post({ data }) {
    // Render your page
}