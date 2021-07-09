import 'package:flutter/material.dart';

void main() {
  runApp(App());
}

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Meu primeiro App",
      home: HomePage(),
      themeMode: ThemeMode.dark,
      theme: ThemeData(
          primaryColor: Colors.purple,
          scaffoldBackgroundColor: Colors.purpleAccent,
          floatingActionButtonTheme: FloatingActionButtonThemeData(
            backgroundColor: Colors.purpleAccent,
          )),
      darkTheme: ThemeData(
          primaryColor: Colors.black,
          scaffoldBackgroundColor: Colors.grey,
          floatingActionButtonTheme: FloatingActionButtonThemeData(
            backgroundColor: Colors.grey,
          )),
    );
  }
}

class HomePage extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return HomePageState();
  }
}

class HomePageState extends State<HomePage> {
  var count = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Contador"),
      ),
      body: Center(
        child: Text(
          "Contagem: $count",
          style: TextStyle(color: Colors.white, fontSize: 18),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          setState(() {
            count++;
          });
        },
        child: Icon(Icons.add),
      ),
    );
  }
}
