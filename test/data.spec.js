import {  filterByDirector ,filterByCharteres ,filterById, orderByYears ,orderAlphabetPerson ,  SearchByTitle ,joinCharacter} from '../src/data.js';

//filtrado por directores

describe('filterByDirector', () => {

  it('is a function to filter by director of studio Ghibli', () => {
    expect(typeof filterByDirector).toBe('function');
  });

  const arrayPrueba = [{
                      director: "Hayao Miyazaki" ,
                      id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49" ,
                      producer: "Hayao Miyazaki" ,
                      release_date: "1988" },
                        {
                          director: "Hiromasa Yonebayashi",
                          id: "2de9426b-914a-4a06-a3a0-5e6d9d3886f6",
                          producer: "Toshio Suzuki",
                          release_date: "2010"}];
  expect(filterByDirector("Hayao Miyazaki", arrayPrueba)).toEqual([
                    {
                      director: "Hayao Miyazaki" ,
                      id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49" ,
                      producer: "Hayao Miyazaki" ,
                      release_date: "1988" }
                    ]);
});

//filterByCharteres

describe('filterByCharteres', () => {

  it('is a function to filter characters for selections species', () => {
    expect(filterByCharteres).not.toBeNull();
  });

  const arraySpecies= [{name: "Catbus", specie: "Cat" } , { name: "Renaldo Moon aka Moon aka Muta", specie: "Cat" },{ name: "Shishigami",specie: "Spirit" }];

  expect(filterByCharteres("Spirit", arraySpecies)).toEqual([  { name: "Shishigami", specie: "Spirit"}  ]);

});

//filtrado por Id

describe('filterById', () => {

  it('is a function to filter films for id', () => {
    expect(typeof filterById).not.toBeNull();
  });

  const arrayID= [{id: "2baf70d1-42bb-4437-b551-e5fed5a87abe", title: "Castle in the Sky" } ,{ id: "ff24da26-a969-4f0e-ba1e-a122ead6c6e3", title: "Whisper of the Heart" }];

  expect(filterById("ff24da26-a969-4f0e-ba1e-a122ead6c6e3", arrayID)).toEqual([  { id: "ff24da26-a969-4f0e-ba1e-a122ead6c6e3", title: "Whisper of the Heart" } ]);
});

//ordenado por año de peliculas

describe('orderByYears', () => {


  it("if the option is 'rtScore ' , it returns ordered from highest to lowest RtScore ", () => {
    expect(typeof orderByYears).toBe('function');
  });

  const arrayRtScore= [{ title: "Castle in the Sky" , rt_score: "89"} ,{  title: "Whisper of the Heart", rt_score: "10" }];
  expect(orderByYears("rtScore", arrayRtScore)).toEqual([{ title: "Whisper of the Heart", rt_score: "10" } ,{ title: "Castle in the Sky" , rt_score: "89"}]);

  it("if the option is 'falling ' , it returns ordered from highest to lowest years ", () => {
    expect(typeof orderByYears).toBe('function');
  });

  const arrayYears= [{ title: "Castle in the Sky" , release_date: "1988"} ,{  title: "Whisper of the Heart", release_date: "2011" }];

  expect(orderByYears("falling", arrayYears)).toEqual([   {  title: "Whisper of the Heart", release_date: "2011" } ,{ title: "Castle in the Sky" , release_date: "1988"}]);

  it('if the "upward" option  returns ordered from highest to lowest years', () => {
    expect(orderByYears).not.toBeNull();
  });

  const arrayY= [{ title: "Castle in the Sky" , release_date: "1988"} ,{  title: "Whisper of the Heart", release_date: "2011" }];

  expect(orderByYears("upward", arrayY)).toEqual([ { title: "Castle in the Sky" , release_date: "1988"},{  title: "Whisper of the Heart", release_date: "2011" } ]);
});



//orderAlphabetPerson
describe('orderAlphabetPerson', () => {

  it("orderAlphabetPerson is a function for sorting names by characters, if the option is 'A-Z', sort ascending " , () => {
    expect(orderAlphabetPerson).not.toBeNull();
  });

  const name= [ {id: "986faac6-67e3-4fb8-a9ee-bad077c2e7fe", name: "Satsuki Kusakabe"}, {id: "08ffbce4-7f94-476a-95bc-76d3c3969c19", name: "Granny"}];

  expect(orderAlphabetPerson("A-Z",name )).toEqual([{id: "08ffbce4-7f94-476a-95bc-76d3c3969c19", name: "Granny"}, {id: "986faac6-67e3-4fb8-a9ee-bad077c2e7fe", name: "Satsuki Kusakabe"}]);

  it("orderAlphabetPersona is a function for sorting names by characters, if the option is 'Z-A', order descending" , () => {
    expect(orderAlphabetPerson).not.toBeNull();
  });

  const name2= [ {id: "986faac6-67e3-4fb8-a9ee-bad077c2e7fe", name: "Satsuki Kusakabe"}, {id: "08ffbce4-7f94-476a-95bc-76d3c3969c19", name: "Granny"}];

  expect(orderAlphabetPerson("Z-A",name2 )).toEqual([ {id: "986faac6-67e3-4fb8-a9ee-bad077c2e7fe", name: "Satsuki Kusakabe"} ,{id: "08ffbce4-7f94-476a-95bc-76d3c3969c19", name: "Granny"}]);

});

//SearchByTitle

describe('SearchByTitle', () => {

  it("is a function to movie filtering search" , () => {
    expect( typeof SearchByTitle).toBe('function');

  });

  const searchTitle= [{id: "2baf70d1-42bb-4437-b551-e5fed5a87abe", title: "Castle in the Sky" } ,{ id: "ff24da26-a969-4f0e-ba1e-a122ead6c6e3", title: "Whisper of the Heart" }];

  expect(SearchByTitle("Whisper",searchTitle)).toEqual([{ id: "ff24da26-a969-4f0e-ba1e-a122ead6c6e3", title: "Whisper of the Heart" }]);


  it("is a function to movie filtering search" , () => {
    expect(typeof SearchByTitle).toBe('function');
    });

  expect(() => SearchByTitle("",0)).toThrow(TypeError);

});

//

describe('joinCharacter', () => {

  it('It is a function to extract the data of characters from an array', () => {
    expect(typeof joinCharacter).toBe('function');
  });

  const arrayPeople = [
                      {
                      director: "Hayao Miyazaki" ,
                      id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49" ,
                      people:{ id: "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01", name: "Pazu"} ,
                      release_date: "1988" }

                      ,

                        {
                          director: "Hiromasa Yonebayashi",
                          id: "2de9426b-914a-4a06-a3a0-5e6d9d3886f6",
                          people: {id: "05d8d01b-0c2f-450e-9c55-aa0daa34838e", name: "Motro" },
                          release_date: "2010" }
                      ];

  expect(joinCharacter(arrayPeople)).toEqual([
    { id: "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01", name: "Pazu"},{id: "05d8d01b-0c2f-450e-9c55-aa0daa34838e", name: "Motro" }
  ])
});