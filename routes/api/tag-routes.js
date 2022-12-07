const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

//http://localhost:3001/api/tagRoutes
router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll();
    return res.json(tagData);
  } catch (err) {
    res.status(500).json(err);
    console.log("Testing Error");
    //catch error here
  }
});

//http://localhost:3001/api/tagRoutes/:id -> param = :id = res.param.id
router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id);
    res.status(200).json(tagData);
  } catch (error) {}
});

//http://localhost:3001/api/tagRoutes
router.post("/", (req, res) => {
  //req.body
  // create a new tag
  // Product.create(req.body)
  //   .then((product) => {
  //     // if there's product tags, we need to create pairings to bulk create in the ProductTag model
  //     if (req.body.tagIds.length) {
  //       const productTagIdArr = req.body.tagIds.map((tag_id) => {
  //         return {
  //           product_id: product.id,
  //           tag_id,
  //         };
  //       });
  //       return ProductTag.bulkCreate(productTagIdArr);
  //     }
  //     // if no product tags, just respond
  //     res.status(200).json(product);
  //   })
  //   .then((productTagIds) => res.status(200).json(productTagIds))
  //   .catch((err) => {
  //     console.log(err);
  //     res.status(400).json(err);
  //   });
});

// http://localhost:3001/api/tagRoutes/:id -> param
router.put("/:id", (req, res) => {
  //req.body
  //where
  // update a tag's name by its `id` value
});

// http://localhost:3001/api/tagRoutes/:id -> param
router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
