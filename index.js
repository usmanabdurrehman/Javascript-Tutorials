class Junior {}

class Senior {}

class Associate {}

const employee = new Junior({});

if (employee instanceof Junior) {
}
if (employee instanceof Senior) {
}
if (employee instanceof Associate) {
}

switch (true) {
  case employee instanceof Junior: {
  }
  case employee instanceof Senior: {
  }
  case employee instanceof Associate: {
  }
}
