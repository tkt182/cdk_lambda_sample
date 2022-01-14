# frozen_string_literal: true

require 'logger'

def lambda_handler(*)
  {
    statusCode: 200,
    headers: { 'Content-Type': 'text/plain' },
    body: 'Hello, CDK!'
  }
end
