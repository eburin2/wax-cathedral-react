import React from 'react';
import Profile from './Profile';
import AlbumList from './AlbumList';
import SearchBar from './SearchBar';



function Body() {

  return(
    <div className="bodyContainer">
      <style jsx global>{`
        .bodyContainer {
          width: 83vw;
          margin-left: auto;
          margin-right: auto;
        }

        .cover:hover {
          border: 10px solid #50E3C2;
        }


        input {
          width: 250px;
          height: 30px;
          border: 4px solid #50E3C2;
          color: #26499F;
          font-weight: bold;
          font-size: 14px;
          margin-right: 20px;
          margin-top: -100px;

        }

        .mainContainer {
          width: 83vw;
          margin: auto;
        }

        .search {
          width: 8vw;
          display: flex;
          align-content: flex-end;
          justifyContent: flex-end;
          margin-bottom: 50px;
          margin-right: 9vw;
          margin-left: auto;
        }



        * {
          box-sizing: border-box;
          margin: 0px;
        }


      `}</style>
      <Profile/>
      <SearchBar/>
      <AlbumList/>
    </div>

  );
}

export default Body;
