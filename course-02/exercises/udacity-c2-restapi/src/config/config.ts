export const config = {
  dev: {
    username: "udagramamiteshdev",
    password: "PostGres#2020",
    database: "udagramamiteshdev",
    host: "udagramamiteshdev.cejeaasmtagr.ap-south-1.rds.amazonaws.com",
    dialect: "postgres",
    aws_region: "ap-south-1",
    aws_profile: "default",
    aws_media_bucket: "udagram-amitesh-dev",
  },
  prod: {
    username: "",
    password: "",
    database: "udagram_prod",
    host: "",
    dialect: "postgres",
  },
};
