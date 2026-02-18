# frozen_string_literal: true

require "json"

module DatasetLoader
  module_function

  def load(path)
    raise "File not found: #{path}" unless File.exist?(path)
    JSON.parse(File.read(path))
  end
end
