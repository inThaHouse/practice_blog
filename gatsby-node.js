// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const result = await graphql(`
//     query {
//       allMdx {
//         nodes {
//           frontmatter {
//             slug
//           }
//         }
//       }
//     }
//   `)

//   if (result.errors) {
//     reporter.panic('failed to create posts', result.errors)
//   }
// }
