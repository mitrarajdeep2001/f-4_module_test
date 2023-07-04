import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItemData } from "../Store/Slices";
import { TailSpin } from "react-loader-spinner";

const Home = () => {
  const postData = useSelector((state) => state.posts.data);
  const isLoading = useSelector((state) => state.posts.loading);
  const error = useSelector((state) => state.posts.error);
  const dispatch = useDispatch();

  // Handle loading
  if (isLoading) {
    return (
      <div className="loader">
        <TailSpin
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  // Handle error
  if (error) {
    return error;
  }

  // Shorten text
  function moreText(text) {
    const textTitle = text.slice(0, 12) + "...";
    const textDesc = text.slice(0, 15) + "\nRead More...";
    return [textTitle, textDesc];
  }

  // Add clciked item data to the store
  function navigateToUserDetails(item) {
    dispatch(addItemData(item));
  }
  return (
    <div className="Home">
      <h2>Home</h2>
      <div className="card-container">
        {postData.map((e, i) => (
          <Link to={`/item/${e.id}`} style={{ textDecoration: "none" }}>
            <div
              className="card"
              key={i}
              onClick={() => navigateToUserDetails(e)}
            >
              <div className="card-img">
                <img
                  src={`https://picsum.photos/200?random=${e.id}`}
                  alt="item_img"
                />
              </div>
              <div className="info">
                <p>
                  <span className="bold">User ID:</span> {e.id}
                </p>
                <p>
                  <span className="bold">Title:</span> {moreText(e.title)[0]}
                </p>
                <p>
                  <span className="bold">Body:</span> {moreText(e.body)[1]}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
