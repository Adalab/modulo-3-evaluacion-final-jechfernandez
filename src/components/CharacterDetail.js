import React from 'react';
import '../stylesheets/CharacterDetail.scss';
import {Link} from 'react-router-dom';

const CharacterDetail = props => {
  console.log (props);

  if (props.character === undefined) {
    return (
      <div className="detail__notfound">
        <Link to="/">
          <span className="detail__notfound--close fas fa-arrow-left"></span>
          <span className="detail__notfound--tmb">Take me back home</span>
        </Link>
      </div>
    );
  }

  const {
    name,
    image,
    gender,
    status,
    origin,
    location,
    species,
    episode,
  } = props.character;

  return (
    <div>
      <Link to="/">
        <span className="">X</span>
      </Link>

      <div className="">
        <h4 className="">
          {name}
        </h4>
        <img className="" src={image} alt={name} />
        <p className="">
          <span className="">Gender:</span>
          <span className="">{gender}</span>
        </p>
        <p className="">
          <span className="">Species:</span> <span className="">{species}</span>
        </p>
        <p className="">
          <span className="">Status:</span> <span className="">{status}</span>
        </p>
        <p className="">
          <span className="">Origin:</span> {origin}
        </p>
        <p className="">
          <span className="">Location:</span> {location}
        </p>
        <p className="">
          <span className="">Episodes:</span> {episode}
        </p>
      </div>
    </div>
  );
};

export default CharacterDetail;

// const CharacterDetail = props => {

//   const { routerProps, api } = props;
//     const characterId = parseInt(routerProps.match.params.characterId);

//     if (characterId > api.length) {
//         return (
//             <div>
//                 <p>Sorry, we don't really know what you're looking for. There’s a lesson here and I’m not going to be the one to figure it out.</p>
//                 <Link to="/" >Back to homepage</Link>
//             </div>
//         );
//     }
//   return (
//     <div className="CharacterDetail">
//       <h1>Holi</h1>
//     </div>
//   );
// };

// export default CharacterDetail;
