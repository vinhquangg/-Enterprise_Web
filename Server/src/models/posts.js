// const {Sequelize,DataTypes,Model} = require("sequelize");
// module.exports = (sequelize) =>{
//     class Posts extends Model {
//         // static associate(db) {
//         //   // Khai báo các mối quan hệ
//         //   this.hasOne(cate,{
//         //     as:"category",
//         //       foreignKey:"postId"
//         //   });
//         // }
//     }
       
//     Posts.init({
//         title:{
//             type:DataTypes.STRING,
//             allowNull:false,
//             required:true,
//             field:"title",//key truy suất DB
//         },
//         description:{
//             type: DataTypes.STRING,
//             allowNull: false, // Not Null
//         },
//         content:{
//             type: DataTypes.STRING,
//             allowNull: false, // Not Null
//             required:true,
//         },
//         createdAt: {
//             type: DataTypes.DATE,
//             field: "created_at",
//             defaultValue: Sequelize.fn("CURRENT_TIMESTAMP"),
//         },
//         updatedAt: {
//             type: DataTypes.DATE,
//             field: "updated_at",
//             defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
//         },
//     },
//         {
//           sequelize,
//           modelName: "posts", // Tên model,
//           tableName: "Posts",//Tên table
//           timestamps: true, 
//         }
//     );
//     return Posts;
    
// }



const { Sequelize,Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class posts extends Model {
    static associate(db) {
      this.belongsTo(db.category, {
        as: "category",
        foreignKey: "postId",
      });
    }
  }

  posts.init({
            title:{
                type:DataTypes.STRING,
                allowNull:false,
                required:true,
            },
            description:{
                type: DataTypes.STRING,
                allowNull: false, // Not Null
            },
            content:{
                type: DataTypes.STRING,
                allowNull: false, // Not Null
                required:true,
            },
            createdAt: {
                type: DataTypes.DATE,
                field: "created_at",
                defaultValue: Sequelize.fn("CURRENT_TIMESTAMP"),
            },
            updatedAt: {
                type: DataTypes.DATE,
                field: "updated_at",
                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            },
        },
            {
              sequelize,
              modelName: "posts", // Tên model,
              tableName: "Posts",//Tên table
              timestamps: true, 
            }
        );
        return posts;
};
