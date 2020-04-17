
exports.seed = function(knex) {
  return knex('projects').insert([   
    {project_name: 'aaa', project_description: "aaa" },
    {project_name: 'aaaa', project_description: "aaaa" }
  ]);
}
