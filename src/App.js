import React from "react";
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar";
import axios from "axios";
import TableComponent from "./components/TableComponent/TableComponent";
class App extends React.Component {
  constructor() {
    super();
    this.state = { keyword: "", currencyTable: null };
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.setState = this.setState.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  fetchData() {
    axios
      .get(`https://api.nbp.pl/api/exchangerates/tables/a/`)
      .then((response) => {
        if (this.state.keyword !== "") {
          this.setState({
            keyword: this.state.keyword,
            currencyTable: response.data[0].rates.find(
              (el) => el.code === this.state.keyword.toUpperCase()
            ),
          });
        } else {
          this.setState({
            keyword: this.state.keyword,
            currencyTable: response.data[0].rates,
          });
        }
      });
  }

  componentDidUpdate(_, prevState) {
    if (
      this.state.keyword !== prevState.keyword &&
      this.state.keyword.length > 2
    ) {
      this.fetchData();
    } else if (
      this.state.keyword === "" &&
      this.state.keyword !== prevState.keyword
    ) {
      this.fetchData();
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Form setState={this.setState} />
        {this.state.currencyTable && (
          <TableComponent
            currencyTable={
              this.state.currencyTable.length
                ? this.state.currencyTable
                : [this.state.currencyTable]
            }
          />
        )}
      </div>
    );
  }
}

export default App;

// 1. Funkcja fetchujaca dane przy pomocy axiosa: fetchData()
// W tej funkcji z endpointu https://api.nbp.pl/api/exchangerates/tables/a/ ściągacie dane (axios.get)
// 2. Wrzucacie dane do stanu
// Jeżeli this.state.keyword !== "" to szukacie odpowiedniej waluty w danych z axiosa i wrzucacie ten obiekt do stanu (response.data[0].rates.find()) (keyword === el.code)
// Jeżeli keyword === '' to do stanu wrzucacie całą liste obiektów rates

// 2. uzycie componentDidUpdate
// sprawdz i wykorzystaj parametry wbudowane w ta funkcje
// a) jeżeli świeży keyword jest różny od keyworda w poprzedniego stanu (jeden z parametrow fn componentDidUpdate) i nowy keyword ma length > 2 to wtedy wywolanie fetchData
// b) jeżeli nowy keyword jest równy "" i nowy keyword jest różny od keyworda z poprzedniego stanu to wtedy wywolanie fetchData

// prevState.keyword

// 1. Znajdź komponent Table w MUI (Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper)
// 2. Tworzycie komponent klasowy TableComponent
// 3. Wyświetla tabelke z MUI (w środku komponentu jest tylko render())
// a) pierwsza kolumna ma być podpisana "Currency code"
// b) druga kolumna ma być podpisana "Currency name"
// c) pierwsza kolumna ma być podpisana "Exchange rate (PLN)"
// d) W TableBody, przy pomocy metody .map() wyświetlacie komponenty TableRow w pętli z informacjami o walucie: w pierwszej kolumnie kod waluty (np. USD), w drugiej pełną nazwe waluty, w trzeciej kurs waluty (currency.mid)
// Informacje o walutach przekazane do komponentu będą przez propsy, ale uwaga co przekazujemy (screen na slacku)
