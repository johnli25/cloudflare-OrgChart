
const testCSVData = `name,department,salary,office,isManager,skill1,skill2,skill3
John,CDN,80,Lisbon,FALSE,Caching,C++,AI
Jill,Developer Platform,100,Austin,FALSE,Typescript,C++,GoLang
Audrey Leblanc,Accounting,154,Singapore,TRUE,HTML,CSS,Postgres
Braden McMahon,Bots,219,San Francisco,TRUE,Distributed Systems,Rust,AI
Belen Norman,Developer Platform,252,London,TRUE,HTML,Rust,GoLang
Aziel Gibson,CDN,145,New York,TRUE,Caching,C++,AI
Eden Roy,Accounting,190,Austin,FALSE,Typescript,C++,GoLang
Marcelo Sullivan,Bots,241,Singapore,FALSE,HTML,CSS,Postgres
Melanie Esparza,Developer Platform,231,San Francisco,FALSE,Distributed Systems,Rust,AI
Carl Nava,CDN,230,London,FALSE,HTML,Rust,GoLang
Scout Hansen,Accounting,259,New York,FALSE,Caching,C++,AI
Charlie West,Bots,131,Lisbon,FALSE,Typescript,C++,GoLang
Remi Hendrix,Developer Platform,162,Austin,FALSE,HTML,CSS,Postgres
Korbyn Cuevas,CDN,86,Singapore,FALSE,Distributed Systems,Rust,AI
Adele Castillo,Accounting,237,San Francisco,FALSE,HTML,Rust,GoLang
Kai Rojas,Bots,102,London,FALSE,Caching,C++,AI
Adaline Murphy,Developer Platform,238,New York,FALSE,Typescript,C++,GoLang
Cameron Doyle,CDN,81,Lisbon,FALSE,HTML,CSS,Postgres
Annalise Fuller,Accounting,172,Austin,FALSE,Distributed Systems,Rust,AI
Andre Spears,Bots,106,Singapore,FALSE,HTML,Performance,GoLang
Isabela Casey,Developer Platform,283,San Francisco,FALSE,Caching,C++,AI
Armando Trujillo,CDN,178,London,FALSE,Typescript,CSS,GoLang
Danielle Adkins,Accounting,89,New York,FALSE,HTML,Rust,Postgres
Kylo Hayes,Bots,213,London,FALSE,Distributed Systems,Performance,AI
Iris Frye,Developer Platform,212,New York,FALSE,HTML,C++,GoLang
Franco Short,CDN,82,Lisbon,FALSE,Caching,CSS,AI
Cheyenne Fowler,Accounting,150,Austin,FALSE,Typescript,Rust,GoLang
Kameron Colon,Bots,149,Singapore,FALSE,HTML,Performance,Postgres
Remy Wang,Developer Platform,94,San Francisco,FALSE,Distributed Systems,C++,AI
Cohen Dougherty,CDN,157,London,FALSE,HTML,CSS,GoLang
Alisson Russell,Accounting,214,New York,FALSE,Caching,Rust,AI
Weston McIntosh,Bots,130,Lisbon,FALSE,Typescript,Performance,GoLang
Gwen Gutierrez,Developer Platform,259,Austin,FALSE,HTML,C++,Postgres
Luca Acosta,CDN,175,Singapore,FALSE,Distributed Systems,CSS,AI
Kaia Wyatt,Accounting,112,San Francisco,FALSE,HTML,Rust,GoLang
Sam Hubbard,Bots,87,London,FALSE,Caching,Performance,AI
Rosie Hull,Developer Platform,227,New York,FALSE,Typescript,C++,GoLang
Salem Foley,CDN,290,London,FALSE,HTML,CSS,Postgres
Zaylee Blair,Accounting,136,New York,FALSE,Distributed Systems,Rust,AI
Troy Bartlett,Bots,103,Lisbon,FALSE,HTML,Performance,GoLang
Aubrielle Collier,Developer Platform,225,Austin,FALSE,Distributed Systems,C++,AI
Edison Hamilton,CDN,267,Singapore,FALSE,HTML,CSS,GoLang
Mackenzie Gill,Accounting,101,San Francisco,FALSE,Caching,Rust,Postgres
Matthias Greene,Bots,288,London,FALSE,Typescript,Performance,AI
Selena Hutchinson,Developer Platform,263,New York,FALSE,HTML,C++,GoLang
Korbin Francis,CDN,108,Lisbon,FALSE,Distributed Systems,Rust,AI
Daniella Noble,Accounting,289,Austin,FALSE,HTML,Performance,GoLang
Idris Kent,Bots,297,Singapore,FALSE,Caching,C++,Postgres
Jazmine Holt,Developer Platform,139,San Francisco,FALSE,Typescript,Rust,AI
Niko Molina,CDN,229,London,FALSE,HTML,Performance,GoLang
Alexandria Booth,Accounting,156,New York,FALSE,Distributed Systems,C++,AI
Chaim Cisneros,Bots,80,Austin,FALSE,Distributed Systems,Rust,GoLang
Janelle Hall,Developer Platform,158,Singapore,FALSE,HTML,Performance,Postgres
Thomas Nixon,CDN,201,San Francisco,FALSE,Caching,C++,AI
Deborah Taylor,Accounting,186,London,FALSE,Typescript,Rust,GoLang
Jackson Parsons,Bots,150,New York,FALSE,HTML,Performance,AI
Maia Blackburn,Developer Platform,294,Austin,FALSE,Distributed Systems,C++,GoLang
Zahir Hartman,CDN,106,Singapore,FALSE,HTML,Rust,Postgres
Kennedi Palacios,Accounting,300,San Francisco,FALSE,Caching,Performance,AI
Thaddeus Dillon,Bots,172,London,FALSE,Typescript,C++,GoLang
Laurel Moore,Developer Platform,194,New York,FALSE,HTML,Rust,AI
Levi Rivers,CDN,141,Austin,FALSE,Distributed Systems,Performance,GoLang
Kiana Ray,Accounting,104,Austin,FALSE,Distributed Systems,C++,Postgres
Arlo Person,Bots,203,Singapore,FALSE,HTML,Rust,AI
Dylan Evans,Developer Platform,90,San Francisco,FALSE,Caching,Performance,GoLang
Elias Quintero,CDN,215,London,FALSE,Typescript,C++,AI
Keyla Hurst,Accounting,137,New York,FALSE,HTML,Rust,GoLang
Neil Carroll,Bots,188,Austin,FALSE,Distributed Systems,Performance,Postgres
Zara Bradford,Developer Platform,163,Austin,FALSE,HTML,C++,AI
Ander Quintero,CDN,226,Singapore,FALSE,Caching,Rust,GoLang
Keyla Bravo,Accounting,242,San Francisco,FALSE,Typescript,Performance,AI
Genesis Felix,Bots,187,London,FALSE,HTML,C++,GoLang
Paisleigh Sherman,Developer Platform,118,New York,FALSE,Distributed Systems,Rust,Postgres
Adan Sanford,CDN,280,Austin,FALSE,Distributed Systems,Performance,AI
Emerald Macdonald,Accounting,228,Austin,FALSE,HTML,C++,GoLang
Hugh Bowman,Bots,139,Singapore,FALSE,Caching,Rust,AI
Fiona Robinson,Developer Platform,300,San Francisco,FALSE,Typescript,Performance,GoLang
Matthew Christensen,CDN,204,London,FALSE,HTML,C++,Postgres
Carmen McLaughlin,Accounting,221,New York,FALSE,Distributed Systems,Rust,AI
Ibrahim Gould,Bots,262,Austin,FALSE,HTML,Performance,GoLang
Violeta Cortes,Developer Platform,98,Austin,FALSE,Caching,C++,AI
Banks Fitzpatrick,CDN,250,Singapore,FALSE,Typescript,Rust,GoLang
Annabella Velasquez,Accounting,172,San Francisco,FALSE,HTML,Performance,Postgres
Sullivan Nunez,Bots,165,London,FALSE,Distributed Systems,C++,AI
Mya Hardy,Developer Platform,127,New York,FALSE,Distributed Systems,Rust,GoLang
Jayceon Murillo,CDN,128,Austin,FALSE,HTML,Performance,AI
Mikaela Hampton,Accounting,89,Austin,FALSE,Caching,C++,GoLang
Hank Sandoval,Bots,165,Singapore,FALSE,Typescript,Rust,Postgres
Elsie McCarthy,Developer Platform,128,San Francisco,FALSE,HTML,Rust,AI
Devin Weber,CDN,285,London,FALSE,Distributed Systems,Performance,GoLang`;

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

function getOrganizationDataFromCSV(csvData) {
  const rows = csvData.split('\n');
  let departments = {};

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i].split(',');
    const [name, department, salary, office, isManager, ...skills] = row;

    if (!departments[department]) { // Create department if it doesn't exist
      departments[department] = { name: department, managerName: '', employees: [] };
    }

    if (isManager === 'TRUE') { // Set manager name for the department
      departments[department].managerName = name;
    }

    departments[department].employees.push({ // Add employee to the respective department
      name,
      salary: Number(salary),
      office,
      isManager: isManager === 'TRUE',
      skills
    });
  }

  return organization = { organization: { departments: Object.values(departments) } };
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function filterEmployees(organization, reqBodySearchCriteria) {
  const {departments} = organization; 

  const filterEmployees = departments.flatMap((department) => 
    department.employees.filter((employee) => {
      // Regular expression checks for provided search criteria
      const nameRegex = reqBodySearchCriteria.name ? new RegExp(reqBodySearchCriteria.name, 'i') : null;
      const departmentRegex = reqBodySearchCriteria.department ? new RegExp(reqBodySearchCriteria.department, 'i') : null;
      const minSalary = reqBodySearchCriteria.minSalary || 0;
      const maxSalary = reqBodySearchCriteria.maxSalary !== undefined ? reqBodySearchCriteria.maxSalary : Number.MAX_SAFE_INTEGER;
      const officeRegex = reqBodySearchCriteria.office ? new RegExp(reqBodySearchCriteria.office, 'i') : null;

      const skillRegexStr = reqBodySearchCriteria.skill ? escapeRegExp(reqBodySearchCriteria.skill) : null;
      const skillRegex = skillRegexStr ? new RegExp(skillRegexStr, 'i') : null;
      return (
        (!nameRegex || nameRegex.test(employee.name)) &&
        (!departmentRegex || departmentRegex.test(department.name)) &&
        employee.salary >= minSalary &&
        employee.salary <= maxSalary &&
        (!officeRegex || officeRegex.test(employee.office)) &&
        (!skillRegex || employee.skills.some((skill) => skillRegex.test(skill)))
      );
    }), []
  );
  return filterEmployees;
}

/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  const url = new URL(request.url);

  if (url.pathname == "/organization-chart" && request.method == "GET") {
    const organizationData = JSON.stringify(await getOrganizationDataFromCSV(testCSVData));
    if (organizationData === null) {
      return new Response("Organization data not found", { status: 404 });
    }
    return new Response(organizationData, {
      headers: { 'content-type': 'application/json' , 'Access-Control-Allow-Origin': '*'},
    });
  }

  if (url.pathname == "/organization-chart" && request.method == "POST") {
    const requestBody = await request.json();
    var csvData = requestBody.organizationData;
    var organizationJson = JSON.stringify(getOrganizationDataFromCSV(csvData));
    // await CloudflareOrgDashboardKV.put("organizationData", "test"); // Store in KV
    return new Response(organizationJson, {
      headers: { 'content-type': 'application/json' , 'Access-Control-Allow-Origin': '*'},
    });
  }

  if (url.pathname == "/employee" && request.method == "POST") {
    const requestBodySearchCritera = await request.json(); // requestBody defines search criteria
    const organizationJson = getOrganizationDataFromCSV(testCSVData);
    var matchingEmployees = [];
    if (organizationJson.organization){
      matchingEmployees = filterEmployees(organizationJson.organization, requestBodySearchCritera);
    }
    return new Response(JSON.stringify({ employees: matchingEmployees }), {
      headers: { 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*'}
    });
  }

  if (url.pathname == "/me" && request.method == "GET"){
    const me = {
      "name": "John Li",
      "homepage": "https://cloudflare-org-dashboard-project-worker.john-li25.workers.dev/", 
      "githubURL": "https://github.com/johnli25", 
      "interestingFact": "I do club swim, soccer, and triathalon at the University of Illinois at Urbana-Champaign!", 
      "skills": ["C++", "C", "Python", "Java", "x86 Assembly", "SQL", "Go", "JavaScript", "C#", "SystemVerilog", "TypeScript", "Neo4j/Cypher", "Bash/Shell", "Linux", "Git", "Agile/Scrum", "Jenkins", "MongoDB", "Kubernetes", "Docker", "Qemu", "Node.js", "Perforce", "React", "FPGA", "AWS", "PyTorch", "Google Cloud Platform (GCP)", "REST API"]
    };

    return new Response(JSON.stringify(me), {
      headers: { 'content-type': 'application/json' },
    });
  }

  return new Response('Hello worker!', {
    headers: { 'content-type': 'text/plain' },
  })
}
