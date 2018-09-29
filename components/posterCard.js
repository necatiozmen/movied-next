const PosterCard = props => {
  return (
    <div className="box-main" >
      <div>
        <img className="box-image" src={props.src} alt="posters" />
      </div>
      <div className="box-title">
        <p>{props.title}</p>
      </div>
      <style jsx>{`
         .box-main {
          display: flex;
          flex-direction: column;
          width: 120px;
          height: 180px;
          margin-bottom: 70px;
        }

         .box-image {
          max-height: 100%;
          max-width: 100%;
         }

        .box-title {
          font-family: 'Open Sans', 'Roboto', sans-serif;
          align-self: flex-start;
        }

        .box-title > p {
          font-size: 11px;
        }


        @media only screen
          and (min-width: 320px)
          and (max-width: 667px) {
          .box-main {
            width: 200px;
            height: 250px;
            margin-bottom: 200px;
          }

          .box-title {
            align-self: center;
          }

          .box-title > p {
            font-size: 16px;
          }
        }

      `}</style>
    </div>
  );
};

export default PosterCard;
