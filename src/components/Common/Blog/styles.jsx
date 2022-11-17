import styled from "styled-components";
import { breakpoints } from "../../../utils/breakpoints";

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #f1f1f1;
    padding-bottom: 30px;
    margin-bottom: 10px;
  .author {
    height: 50px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1rem;
  }
  .avatar {
    height: 55%;
    img {
      height: 100%;
      border-radius: 10px;
    }
  }

  .name p {
    font-weight: 500;
  }

  .published-on p {
    color: grey;
    font-weight: 400;
  }

  .description-container {
    width: 100%;
    display: flex;
    margin-bottom: 20px;
    cursor: pointer;
  }
  .description {
    width: 70%;
    margin-botton: 15px;
  }
  .post-image {
    width: 25%;
    img {
        width: 100%;
    }
  }
  .title {
    margin-bottom: 10px;
  }
  .title p {
    font-size: 25px;
    font-weight: 500;
  }
  .brief {
    width: 90%;
  }
  .brief p {
    font-family: source-serif-pro, Georgia, Cambria, "Times New Roman", Times, serif;
    line-height: 24px;
    font-size: 16px;
    color: grey;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
}
  }
  .post-info {
    width: 65%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .category-estimated {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .category {
    padding: 3px 10px;
    border-radius: 1rem;
    background-color: #f1f1f1;
    font-weight: 400;
  }
  .estimated p {
    color: grey;
  }

  .save-list {
    cursor: pointer;
  }

  @media screen and (max-width: ${breakpoints.tabletS}px) {
    .brief {
        display: none;
    }
}
@media screen and (max-width: ${breakpoints.mobileL}px) {
    .description-container {
        margin-bottom: 10px;
    }
    .post-image {
        width: 30%;
    }
    .post-info {
        width: 100%;
    }
    .description {
        display: flex;
        align-items: center;
    }
    .title p {
        font-size: 20px;
    }
`;
