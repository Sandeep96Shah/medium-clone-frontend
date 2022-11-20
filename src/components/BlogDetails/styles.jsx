import styled from "styled-components";

export const BlogDetails = styled.div`
p {
    margin-bottom: 0px;
}
  .user-info {
    display: flex;
    height: 100px;
  }
  .avatar {
    height: 100%;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 70px;
      border-radius: 50%;
      width: 70px;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .name-follow {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .blog-time {
    display: flex;
    gap: 10px;
  }
  .name {
    font-size: 25px;
    font-weight: 500;
  }
  .follow {
    font-size: 20px;
    padding: 7px 15px;
    background-color: #74ef74;
    border-radius: 20px;
    font-weight: 600;
    color: white;
    cursor: pointer;
  }
  .blog-time {
    font-size: 20px;
    color: grey;
  }
  .title {
    font-size: 30px;
    font-weight: 500;
    line-height: 1.5;
  }
  .image {
    img {
      width: 100%;
      height: 50%;
      max-height: 450px;
    }
  }
  .brief {
    p {
      font-size: 20px;
      line-height: 1.4;
      color: grey;
      font-family: source-serif-pro, Georgia, Cambria, "Times New Roman", Times, serif;
    }
  }
  .content {
    font-size: 20px;
      line-height: 1.4;
      color: grey;
      font-family: source-serif-pro, Georgia, Cambria, "Times New Roman", Times, serif;
  }
  .divider {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    font-size: 30px;
    color: grey;
    margin: 10px 0;
  }
`;
