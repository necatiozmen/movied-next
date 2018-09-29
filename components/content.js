import PosterCard from './posterCard'

const Content = ({entries, isReady, isSomethingWrong}) => {
  const listItems = () => {
    if (!isSomethingWrong) {
      return entries.map((item, index) =>
       <PosterCard
         key={index}
         src={item.images['Poster Art'].url}
         title={item.title}
       />
      );
    }

    return <div><p>Oops.. Something went wrong</p></div>;
  };

  let content = !isReady && !isSomethingWrong
    ? <div>Loading...</div>
    : listItems();

  return (
    <div className="content-container">
      <div className="inner-container">
        {content}
      </div>
      <style jsx>{`
         .content-container {
          padding: 50px 95px 80px;
          background-color: #FDFDFD;
        }

        .inner-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        }

        @media only screen
          and (min-width: 320px)
          and (max-width: 667px) {
          .content-container {
            padding: 60px 20px 40px;
          }
        }
      `}</style>
    </div>
  );
};


export default Content;
