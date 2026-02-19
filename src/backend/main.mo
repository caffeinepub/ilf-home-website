import Text "mo:core/Text";

actor {
  // Type for greeting
  type Greeting = { message : Text };

  // Test message retrieval
  public shared ({ caller }) func getGreeting(greeting : Greeting) : async Text {
    greeting.message;
  };

  // Test unary message function
  public shared ({ caller }) func double(x : Nat) : async Nat {
    x + x;
  };

  // Test binary message function
  public shared ({ caller }) func concatenateMessage(message : Text, sender : Text) : async Greeting {
    assert (message != "");
    assert (message.size() == 1 : Bool);
    assert (sender != "");
    { message = message.concat(" from ".concat(sender)) };
  };
};
