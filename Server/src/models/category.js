// const {DataTypes,Model} = require("sequelize");
// module.exports = (sequelize) =>{
//     class Cates extends Model {
//         static associate(db) {
//           // Khai báo các mối quan hệ
//           this.hasMany(db.posts,{
//               as:"posts",
//               foreignKey:"CategoryId"
//           });
//         }
//     }
      
//     Cates.init({
//         name:{
//             type:DataTypes.STRING,
//             allowNull:false,
//             required:true,
//             field:"name",//key truy suất DB
//         },
//         description:{
//             type: DataTypes.STRING,
//             allowNull: false, // Not Null
//         },
//     },
//         {
//           sequelize,
//           modelName: "category", // Tên model,
//           tableName: "Category",//Tên table
//           timestamps: true, 
//         }
//     );
//     return Cates;
    
// }


const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class category extends Model {
    static associate(db) {
      this.hasMany(db.posts, {
        as: "post",
        foreignKey: "postId",
      });
    }
  }

      category.init({
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true,
            field:"name",//key truy suất DB
        },
        description:{
            type: DataTypes.STRING,
            allowNull: false, // Not Null
        },
        postId: {
            type: DataTypes.STRING,
            allowNull: true,
            field: "postId",
        }
    },
        {
          sequelize,
          modelName: "category", // Tên model,
          tableName: "Category",//Tên table
          timestamps: true, 
        }
    );
    return category;
};
