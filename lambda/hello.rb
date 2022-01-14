# frozen_string_literal: true

def lambda_handler(*)
  {
    statusCode: 200,
    headers: { 'Content-Type': 'text/plain' },
    body: 'Hello, CDK!'
  }
end
